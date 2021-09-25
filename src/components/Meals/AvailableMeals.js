import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Qogirma Lagmon",
    description: "Handmade Noodles",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Palov",
    description: "Uzbek Specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Besh Barmoq",
    description: "Kazakh Meal",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Achichuq",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
