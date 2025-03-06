import { BookList } from "@/components/BookList/BookList"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { API_URL, HOME_CONTENT } from "@/lib/constants"
import { Book } from "@/lib/types"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([])
  const [filter, setFilter] = useState(() => localStorage.getItem("bookFilter") || "active");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${API_URL}/books`)
        if (!response.ok) {
          throw new Error(HOME_CONTENT.failedToFetchBooks)
        }
        const data = await response.json()
        setBooks(data)
        setLoading(false)
      } catch (error) {
        console.error(HOME_CONTENT.errorFetchingBooks, error)
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  useEffect(() => {
    localStorage.setItem("bookFilter", filter);
  }, [filter]);

  const filteredBooks = books.filter((book) => {
    if (filter === HOME_CONTENT.filters[0].value) return true;
    if (filter === HOME_CONTENT.filters[1].value) return book.isActive;
    if (filter === HOME_CONTENT.filters[2].value) return !book.isActive;
    return true;
  });

  if (loading) {
    return <div><Loader2 className="animate-spin" /></div>
  }

  return (
    <>
      <div className="flex items-center space-x-4 mb-4">
        <Select onValueChange={setFilter} value={filter}>
          <SelectTrigger>
            <SelectValue placeholder={HOME_CONTENT.selectFilter} />
          </SelectTrigger>
          <SelectContent>
            {HOME_CONTENT.filters.map((item) => (
              <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-gray-500 text-sm">{filteredBooks.length} of {books.length}</p>
      </div>
      <BookList books={filteredBooks} />
    </>
  )
}

export { Home }