import { BookForm } from "@/components/BookForm/BookForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ADD_BOOK_CONTENT } from "@/lib/constants";
import { useParams } from "react-router-dom";

const AddBook = () => {
  const { id } = useParams();
  
  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-md">
      <CardHeader>
        <CardTitle>{id ? ADD_BOOK_CONTENT.editBook : ADD_BOOK_CONTENT.addBook}</CardTitle>
      </CardHeader>
      <CardContent>
        <BookForm />
      </CardContent>
    </Card>
  );
};

export { AddBook };
