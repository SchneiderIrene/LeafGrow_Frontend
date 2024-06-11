export interface Pot {
  potId: string;
  isActive: boolean;
}


export interface PotsSliceState {
  pots: Pot[];
  status: "default" | "loading" | "success" | "error";
  error: string | null | undefined;
}