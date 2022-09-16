import { useEffect, useState } from "react";

const useFindBottom = () => {
  const [bottom, setBottom] = useState()
  const updateBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
      setBottom(true)
    }
    else {
      setBottom(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', updateBottom)
    updateBottom();
    return () => window.addEventListener('scroll', updateBottom)
  })
  return bottom;
};

export default useFindBottom

