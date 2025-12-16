import { FontOption } from './types';

export const API_BASE_URL = 'https://api.quran.com/api/v4/verses/by_key';

export const REQUIRED_FIELDS = [
  'text_indopak',
  'text_imlaei_simple',
  'text_imlaei',
  'text_uthmani',
  'text_uthmani_simple',
  'text_uthmani_tajweed',
  'text_qpc_hafs',
  'qpc_uthmani_hafs',
  'text_qpc_nastaleeq_hafs',
  'text_qpc_nastaleeq',
  'text_indopak_nastaleeq'
].join(',');

export const FONTS: { label: string; value: FontOption }[] = [
  { label: 'QPC Hafs (Uthmanic)', value: 'qpc-hafs' },
  { label: 'Me Quran (Volt Newmet)', value: 'me' },
  { label: 'QPC Nastaleeq', value: 'qpc-nastaleeq' },
  { label: 'Indopak Nastaleeq (Hanafi)', value: 'indopak-nastaleeq' },
  { label: 'Digital Khatt V2', value: 'digitalkhaat-v2' },
  { label: 'Digital Khatt V1', value: 'digitalkhaat' },
  { label: 'System Default', value: 'sans-serif' },
];

export const SCRIPT_LABELS: Record<string, string> = {
  text_uthmani: 'Uthmani',
  text_uthmani_simple: 'Uthmani Simple',
  text_qpc_hafs: 'QPC Hafs',
  qpc_uthmani_hafs: 'QPC Uthmani Hafs',
  text_indopak: 'Indopak',
  text_indopak_nastaleeq: 'Indopak Nastaleeq',
  text_qpc_nastaleeq: 'QPC Nastaleeq',
  text_qpc_nastaleeq_hafs: 'QPC Nastaleeq Hafs',
  text_imlaei: 'Imlaei',
  text_imlaei_simple: 'Imlaei Simple',
  text_uthmani_tajweed: 'Uthmani Tajweed',
};
