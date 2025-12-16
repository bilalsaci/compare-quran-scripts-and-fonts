export interface Verse {
  id: number;
  verse_number: number;
  verse_key: string;
  hizb_number: number;
  rub_el_hizb_number: number;
  ruku_number: number;
  manzil_number: number;
  sajdah_number: number | null;
  text_indopak: string;
  text_imlaei_simple: string;
  text_imlaei: string;
  text_uthmani: string;
  text_uthmani_simple: string;
  text_uthmani_tajweed: string;
  text_qpc_hafs: string;
  qpc_uthmani_hafs: string;
  text_qpc_nastaleeq_hafs: string;
  text_qpc_nastaleeq: string;
  text_indopak_nastaleeq: string;
  page_number: number;
  juz_number: number;
}

export interface VerseResponse {
  verse: Verse;
}

export type FontOption = 
  | 'qpc-hafs' 
  | 'me' 
  | 'qpc-nastaleeq'
  | 'indopak-nastaleeq'
  | 'digitalkhaat-v2'
  | 'digitalkhaat'
  | 'sans-serif';

export interface Surah {
  id: number;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
}

export type SurahMap = Record<string, Surah>;
