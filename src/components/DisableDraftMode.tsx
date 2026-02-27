"use client";

import { useTransition } from "react";
import { disableDraftMode } from "@/app/actions";
import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition();
  const isPresentationTool = useIsPresentationTool();

  // Só mostra o botão quando NÃO estiver no Presentation Tool
  if (isPresentationTool === true) {
    return null;
  }

  const disable = () => startTransition(() => disableDraftMode());

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      {pending ? (
        <div
          style={{
            background: "#666",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Desligando preview...
        </div>
      ) : (
        <button
          type="button"
          onClick={disable}
          style={{
            background: "#000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          🔴 Desligar preview
        </button>
      )}
    </div>
  );
}
