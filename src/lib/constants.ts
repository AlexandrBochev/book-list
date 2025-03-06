export const API_URL = "http://localhost:8000";

export const ROUTES = {
  HOME: "/",
  ADD_BOOK: "/add-book",
  EDIT_BOOK: "/add-book/:id",
};

export const HEADER_CONTENT = {
  title: "Book List",
  addNewBook: "Add New Book",
};

export const FOOTER_CONTENT = {
  title: "Alexandr Bochev",
  githubUrl: "https://github.com/AlexandrBochev",
};

export const HOME_CONTENT = {
  failedToFetchBooks: "Failed to fetch books",
  errorFetchingBooks: "Error fetching books:",
  selectFilter: "Select Filter",
  filters: [
    {
      value: "all",
      label: "Show All",
    },
    {
      value: "active",
      label: "Show Active",
    },
    {
      value: "deactivated",
      label: "Show Deactivated",
    },
  ]
};

export const ACTIONS_CONTENT = {
  failedToFetchBookData: "Failed to fetch book data",
  failedToUpdateBook: "Failed to update book",
  errorTogglingIsActive: "Error toggling isActive:",
  confirmDelete: "Are you sure you want to delete this book?",
  failedToDeleteBook: "Failed to delete book",
  errorDeletingBook: "Error deleting book:",
};

export const BOOK_LIST_CONTENT = {
  title: "Book Title",
  author: "Author",
  category: "Category",
  isbn: "ISBN",
  createdAt: "Created At",
  updatedAt: "Updated At",
  actions: "Actions",
};

export const ADD_BOOK_CONTENT = {
  addBook: "Add a New Book",
  editBook: "Edit Book",
};

export const FORM_CONTENT = {
  errorFetchingBook: "Error fetching book:",
  pleaseFillAllFields: "Please fill all fields.",
  bookUpdatedSuccessfully: "Book updated successfully!",
  bookAddedSuccessfully: "Book added successfully!",
  failedToSaveBook: "Failed to save book",
  errorSavingBook: "Error saving book:",
  save: "Save",
  text: [
    {
      key: "bookTitle",
      label: "Book Title",
    },
    {
      key: "authorName",
      label: "Author Name",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "isbn",
      label: "ISBN",
    },
  ],
};
