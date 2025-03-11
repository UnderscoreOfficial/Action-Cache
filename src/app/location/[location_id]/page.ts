import { getAction } from "@/actions/database";
import { redirect } from "next/navigation";

type params = {
  params: Promise<{
    location_id: string
  }>
}

export default async function LocationID({ params }: params) {
  const { location_id } = await params
  const action = await getAction(parseInt(location_id));
  if (action.status && action.data) {
    redirect(`/location/${location_id}/${encodeURI(action.data.name)}`);
  };
} 
