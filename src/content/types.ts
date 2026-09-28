import type { Bilingual } from "@/i18n/config";

export type { Bilingual };

/** How a claim or record is known. */
export type SourceType =
  | "published-source"
  | "family-archive"
  | "oral-history"
  | "document-scan"
  | "photograph"
  | "not-yet-sourced";

/** Public verification states. */
export type VerificationStatus =
  | "verified-published" // Verified by published source
  | "family-archive" // Family archive
  | "oral-history" // Oral history
  | "awaiting-confirmation"; // Awaiting confirmation

export type ImageRights =
  | "family-permission-granted"
  | "permission-pending"
  | "public-domain"
  | "licensed"
  | "unknown"
  | "not-applicable";

/**
 * Provenance fields carried by every historical record.
 * `editorialNotes` is internal only and must never be rendered publicly.
 */
export interface SourceMeta {
  sourceType: SourceType;
  sourceName: string | null;
  sourceDate: string | null;
  verificationStatus: VerificationStatus;
  imageRights: ImageRights;
  editorialNotes?: string;
}

/** Reference to an optimised image in the generated manifest. */
export interface ImageRef {
  /** Key in src/content/generated/image-manifest.json */
  id: string;
  alt: Bilingual;
}
