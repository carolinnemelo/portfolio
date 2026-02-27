"use server";

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function disableDraftMode() {
  const draft = await draftMode();
  draft.disable();

  // Redireciona pra home (isso recarrega a página sem draft mode)
  redirect("/");
}
