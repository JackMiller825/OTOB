import { useRef, useState } from "react";
import { contractDisplay } from "../config/token";

function copyWithSelection(text: string): boolean {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  area.setSelectionRange(0, text.length);
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  area.remove();
  return copied;
}

async function writeText(text: string): Promise<boolean> {
  if (copyWithSelection(text)) return true;
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function CopyAddress() {
  const addressRef = useRef<HTMLParagraphElement>(null);
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");

  async function copyAddress() {
    const copied = await writeText(contractDisplay);
    if (copied) {
      setCopyState("success");
      return;
    }

    const node = addressRef.current;
    if (node) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    setCopyState("error");
  }

  const copyMessage =
    copyState === "success"
      ? "Address copied"
      : copyState === "error"
        ? "Could not copy. Select the address to copy it."
        : "";

  return (
    <div className="address-line">
      <p className="address-line__value" ref={addressRef} translate="no">
        {contractDisplay}
      </p>
      <button type="button" className="btn btn--secondary" onClick={() => void copyAddress()}>
        Copy address
      </button>
      <p className={`copy-status copy-status--${copyState}`} role="status" aria-live="polite">
        {copyMessage}
      </p>
    </div>
  );
}
