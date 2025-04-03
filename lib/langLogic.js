

import { usePathname } from 'next/navigation'



export function checkLang(){
  const path = usePathname();
  const locale = path.split('/')[1] ; 
  const dir =  locale == "en" ? "ltr": "rtl";
  return dir; 
}