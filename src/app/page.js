import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategoriesSearch from "./_components/CategoriesSearch";
import Doctors from "./_components/Doctors";
import Testimonial from "./_components/Testimonial";
import CalendarView from "./_components/Calenderview";
export default function Home() {
  return (
<>
{/* Hero Section */}
<Hero/>
{/* searchbar + categories */}
<CategoriesSearch/>
{/* doctors list display */}
<Doctors/>
<CalendarView/>
{/* testimonial */}
<Testimonial/>
</>
  );
}
        