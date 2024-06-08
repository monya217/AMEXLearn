import './learn.css'
import Hero from "../../components/Hero";
import CoursesList from "../../components/CourseList";
import CategoriesList from "../../components/CategoriesList";

const Learn = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  )
}

export default Learn