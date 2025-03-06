import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Book } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { API_URL, FORM_CONTENT, ROUTES } from "@/lib/constants";

const BookForm = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState<Book>({
    id: "",
    bookTitle: "",
    authorName: "",
    category: "",
    isbn: "",
    createdAt: "",
    updatedAt: "",
    isActive: true,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      try {
        const fetchBook = async () => {
          const response = await fetch(`${API_URL}/books/${id}`);
          if (response.ok) {
            const data = await response.json();
            setBook(data);
          } else {
            console.error(FORM_CONTENT.errorFetchingBook, response.statusText);
          }
        };
        fetchBook();
      } catch (error) {
        console.error(FORM_CONTENT.errorFetchingBook, error);
      }
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!book.bookTitle || !book.authorName || !book.category || !book.isbn) {
      alert(FORM_CONTENT.pleaseFillAllFields);
      return;
    }

    setLoading(true);

    const bookPayload = {
      ...book,
      id: id || Date.now().toString(),
      createdAt: book.createdAt || new Date().toISOString(),
      updatedAt: id ? new Date().toISOString() : "",
      isActive: book.isActive ?? true,
    };

    try {
      const response = await fetch(`${API_URL}/books/${id ? id : ""}`, {
        method: id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookPayload),
      });

      if (response.ok) {
        alert(id ? FORM_CONTENT.bookUpdatedSuccessfully : FORM_CONTENT.bookAddedSuccessfully);
        navigate(ROUTES.HOME);
      } else {
        alert(FORM_CONTENT.failedToSaveBook);
      }
    } catch (error) {
      console.error(FORM_CONTENT.errorSavingBook, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {FORM_CONTENT.text.map((item) => (
        <div key={item.key} className="space-y-2">
          <Label>{item.label}</Label>
          <Input
            name={item.key}
            value={String(book[item.key as keyof Book])}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gray-800 hover:bg-gray-900 active:bg-black"
      >
        {loading ? <Loader2 className="animate-spin" /> : FORM_CONTENT.save}
      </Button>
    </form>
  );
};

export { BookForm };
