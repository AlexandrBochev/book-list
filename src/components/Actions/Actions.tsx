import { FilePenLine, Loader2, ShieldMinus, ShieldPlus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ACTIONS_CONTENT, API_URL, ROUTES } from "@/lib/constants";
import { useWindowWidth } from "@/lib/hooks";
import { useState } from "react";

type ActionsProps = {
  id: string;
  isActive: boolean;
};

const Actions = ({ id, isActive }: ActionsProps) => {
  const [loading, setLoading] = useState(false);
  const width = useWindowWidth();

  const toggleIsActive = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/books/${id}`);
      if (!response.ok) {
        throw new Error(ACTIONS_CONTENT.failedToFetchBookData);
      }
      
      const book = await response.json();
  
      const updateResponse = await fetch(`${API_URL}/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: !book.isActive }),
      });
  
      if (!updateResponse.ok) {
        throw new Error(ACTIONS_CONTENT.failedToUpdateBook);
      }
      
      setLoading(false);
      return await updateResponse.json();
    } catch (error) {
      console.error(ACTIONS_CONTENT.errorTogglingIsActive, error);
      setLoading(false);
      return null;
    }
  };

  const deleteBook = async (id: string) => {
    if (!window.confirm(ACTIONS_CONTENT.confirmDelete)) {
      return null;
    }
  
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/books/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(ACTIONS_CONTENT.failedToDeleteBook);
      }
  
      setLoading(false);
      return await response.json();
    } catch (error) {
      console.error(ACTIONS_CONTENT.errorDeletingBook, error);
      setLoading(false);
      return null;
    }
  };

  const BUTTONS = [
    {
      key: "activate",
      label: isActive ? "Deactivate" : "Activate",
      icon: isActive ? <ShieldMinus /> : <ShieldPlus />,
      onClick: () => toggleIsActive(id),
    },
    {
      key: "edit",
      label: "Edit",
      icon: <FilePenLine />,
      to: ROUTES.EDIT_BOOK.replace(":id", id),
    },
    {
      key: "delete",
      label: "Delete",
      icon: <Trash2 />,
      onClick: () => deleteBook(id),
      disabled: isActive,
    },
  ];

  return (
    <section className="flex items-center xl:gap-3">
      {BUTTONS?.map((button) => (
        <Button
          key={button.key}
          onClick={button.onClick}
          variant={width > 1280 ? "default" : "ghost"}
          disabled={button.disabled}
          className="xl:bg-gray-600 xl:hover:bg-gray-700 xl:active:bg-gray-900 xl:min-w-28 text-xs"
        >
          {button.to ? (
            <Link to={button.to} className="flex items-center gap-x-2">
              {button.icon}
              {width > 1280 && button.label}
            </Link>
          ) : (
            loading ? <Loader2 className="animate-spin" /> : (
            <>
              {button.icon}
              {width > 1280 && button.label}
            </>
            )
          )}
        </Button>
      ))}
    </section>
  );
};

export { Actions };
