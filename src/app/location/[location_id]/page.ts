import { getShortcut } from "@/actions/database";
import { redirect } from "next/navigation";

type params = {
  params: Promise<{
    location_id: string
  }>
}

export default async function LocationID({ params }: params) {
  const { location_id } = await params
  const shortcut = await getShortcut(parseInt(location_id));
  if (shortcut.status && shortcut.data) {
    redirect(`/location/${location_id}/${encodeURI(shortcut.data.shortcut)}`);
  };
} 
