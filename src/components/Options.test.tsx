import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import Options from './Options' // Adjust path as needed
import type { File,Folder } from './Types'


// 1. Mock the Router dependencies
const navigateMock = vi.fn()

vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, className }: any) => (
    <a href={to} data-testid="link" className={className}>
      {children}
    </a>
  ),
  useNavigate: () => navigateMock,
}))

const mockFiles: File[] = [
    {title:'Test1',url:"/Test1"},
    {title:'Test2',url:"/Test2"},
    {title:'Test3',url:"/Test3"},
]

// 2. Define Mock Data
const mockFolder: Folder = {
    title:'Test',
    url:"/tests",
    parent: '/parent-url',
    options: mockFiles
}

describe('Options Component', () => {
  // Clear mocks after each test to prevent pollution
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  //Correct folder
  test('Correct folder is shown (Back link renders when parent exists)', async () => {
    render(<Options folder={mockFolder} />)

    // Check if the Back link is rendered because mockFolder has a parent
    const backLink = screen.getByText('[ESC] Back')
    expect(backLink).toBeInTheDocument()

    // Verify it points to the correct place (based on our mock Link)
    expect(backLink.closest('a')).toHaveAttribute('href', '/parent-url')
  })

  test('Back link is hidden when no parent exists', async () => {
    const rootFolder = { ...mockFolder, parent: undefined }
    render(<Options folder={rootFolder} />)
    
    expect(screen.queryByText('[ESC] Back')).not.toBeInTheDocument()
  })

  //Correct options
  test('Correct options are shown', async () => {
    render(<Options folder={mockFolder} />)

    // Check that all titles from the mock data are present
    mockFolder.options.forEach((opt) => {
      // We use regular expression to match the title because one of them 
      // will have the "> " prefix
      expect(screen.getByText(new RegExp(opt.title))).toBeInTheDocument()
    })

    // Check total number of links (Options + Back link = 4)
    const links = screen.getAllByRole('link') // or generic 'a' tag lookups
    expect(links).toHaveLength(mockFolder.options.length + 1)
  })

  //correct index is shown
  test('correct selected Index handles visuals and keyboard navigation', async () => {
    const user = userEvent.setup()
    render(<Options folder={mockFolder} />)

    // 1. Check Initial State (Index 0 should have the caret ">")
    expect(screen.getByRole('heading', { name: `> ${mockFolder.options[0].title}` })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: `${mockFolder.options[1].title}` })).toBeInTheDocument()

    // 2. Press ArrowDown -> Should move to Index 1
    await user.keyboard('[ArrowDown]')
    
    // Index 0 loses caret, Index 1 gains caret
    expect(screen.getByRole('heading', { name: `${mockFolder.options[0].title}` })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: `> ${mockFolder.options[1].title}` })).toBeInTheDocument()

    // 3. Press ArrowUp -> Should go back to Index 0
    await user.keyboard('[ArrowUp]')
    expect(screen.getByRole('heading', { name: `> ${mockFolder.options[0].title}` })).toBeInTheDocument()

    // 4. Loop Logic: Press ArrowUp on Index 0 -> Should loop to last item
    await user.keyboard('[ArrowUp]')
    const lastItemIndex = mockFolder.options.length - 1
    expect(screen.getByRole('heading', { name: `> ${mockFolder.options[lastItemIndex].title}` })).toBeInTheDocument()

    // 5. Test Navigation on Enter
    await user.keyboard('[Enter]')
    expect(navigateMock).toHaveBeenCalledWith({ to: mockFolder.options[lastItemIndex].url })

    // 6. Test Back on Escape
    await user.keyboard('[Escape]')
    expect(navigateMock).toHaveBeenCalledWith({ to: mockFolder.parent })
  })
})