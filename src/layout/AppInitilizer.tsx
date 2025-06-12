import { useCheckSession } from "@/hooks/useCheckSession";

export default function AppInitilizer() {
  useCheckSession();
  return null;
}
