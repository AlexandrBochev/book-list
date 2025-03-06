import { Book } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { BOOK_LIST_CONTENT } from "@/lib/constants";
import { Actions } from "../Actions/Actions";
import { ShortenText } from "../ShortenText/ShortenText";
import { useWindowWidth } from "@/lib/hooks";
import { actionsStyle, formatDate } from "@/lib/utils";

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  const width = useWindowWidth();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            {BOOK_LIST_CONTENT.title}
          </TableHead>
          <TableHead className="hidden md:table-cell">
            {BOOK_LIST_CONTENT.author}
          </TableHead>
          <TableHead className="hidden sm:table-cell">
            {BOOK_LIST_CONTENT.category}
          </TableHead>
          <TableHead className="hidden lg:table-cell">
            {BOOK_LIST_CONTENT.isbn}
          </TableHead>
          <TableHead className="hidden xl:table-cell">
            {BOOK_LIST_CONTENT.createdAt}
          </TableHead>
          <TableHead className="hidden xl:table-cell">
            {BOOK_LIST_CONTENT.updatedAt}
          </TableHead>
          <TableHead className="pl-4">
            {BOOK_LIST_CONTENT.actions}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books?.map((book) => (
          <TableRow key={book.id}>
            <TableCell className={actionsStyle(book.isActive)}>
              {width < 360 ? <ShortenText text={book.bookTitle} length={16} /> : book.bookTitle}
            </TableCell>
            <TableCell className={`hidden md:table-cell ${actionsStyle(book.isActive)}`}>
              {book.authorName}
            </TableCell>
            <TableCell className={`hidden sm:table-cell ${actionsStyle(book.isActive)}`}>
              {book.category}
            </TableCell>
            <TableCell className={`hidden lg:table-cell ${actionsStyle(book.isActive)}`}>
              {book.isbn}
            </TableCell>
            <TableCell className={`hidden xl:table-cell ${actionsStyle(book.isActive)}`}>
              {formatDate(book.createdAt)}
            </TableCell>
            <TableCell className={`hidden xl:table-cell ${actionsStyle(book.isActive)}`}>
              {book.updatedAt ? formatDate(book.updatedAt) : '-'}
            </TableCell>
            <TableCell>
              <Actions id={book.id} isActive={book.isActive} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { BookList };
