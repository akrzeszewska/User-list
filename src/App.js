import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { UsersList } from "./components/UsersList/UsersList";

const USERS = [
  {
    id: "fw32dw",
    name: "Jane",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Sassy",
    address: {
      city: "Wexford",
      country: "Ireland",
    },
  },
  {
    id: "qweq3rq3",
    name: "John",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Garfield",
    address: {
      city: "Wexford",
      country: "Ireland",
    },
  },
  {
    id: "r3r23r2",
    name: "Jack",
    lastName: "Doe",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Bella",
    address: {
      city: "London",
      country: "England",
    },
  },
  {
    id: "d3j3298",
    name: "Ginger",
    lastName: "Eod",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Ginger",
    address: {
      city: "New York",
      country: "USA",
    },
  },
  {
    id: "e12eqwe",
    name: "Jasmine",
    lastName: "Jassy",
    img: "https://api.dicebear.com/6.x/adventurer/svg?seed=Jasmine",
    address: {
      city: "Warsaw",
      country: "Poland",
    },
  },
];

function App() {
  const [users] = useState(USERS);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearchPhraseChange = () => {
    setSearchPhrase();
  };


  const getFilteredUsers = () => {
 
    return users.filter((myUser) => {
      if (myUser.name.includes(searchPhrase)) {
        return true;
      } 
      if (myUser.lastName.includes(searchPhrase))  {
        return true;
      } 
      if (myUser.address.city.includes(searchPhrase))  {
        return true;
      } 
      if (myUser.address.country.includes(searchPhrase))  {
        return true;
      } 
    });
  };
  

  const usersToDisplay = getFilteredUsers();
  console.log(usersToDisplay)

  return (
    <div className="container">
      <Header onSearchPhraseChange={handleSearchPhraseChange} />
      <UsersList users={usersToDisplay} />
    </div>
  );
};

export default App;
