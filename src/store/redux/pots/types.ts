export interface Pot {
  id: string;
  active: boolean;
}


export interface PotsSliceState {
  pots: Pot[];
  status: "default" | "loading" | "success" | "error";
  error: string | null | undefined;
}