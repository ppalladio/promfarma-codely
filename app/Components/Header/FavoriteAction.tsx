"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/app/Components/ui/Button";
import useFavorite from "../hooks/useFavorite";
import { FaHeart } from "react-icons/fa";

const FavoriteAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const favorite = useFavorite();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/favorites')} className="flex items-center rounded-full bg-black px-4 py-2">
        <FaHeart
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {favorite.items.length}
        </span>
      </Button>
    </div>
  );
}
 
export default FavoriteAction;