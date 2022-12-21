import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [order, setOrder] = useState("ascending");

  const mockTraineesData = [
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Hrishi",
      lastName: "Bhagat",
      email: "hrishikesh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Supriya",
      lastName: "Patil",
      email: "supriya@otssolutions.com",
      gender: "Female",
    },
    {
      firstName: "Manisha",
      lastName: "More",
      email: "manisha@otssolutions.com",
      gender: "Female",
    },
    {
      firstName: "Kaustubh",
      lastName: "Rastogi",
      email: "kaustubh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Pradip",
      lastName: "Kumar",
      email: "pradip@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Varun",
      lastName: "Khurana",
      email: "varun@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Reema",
      lastName: "Singh",
      email: "Reema@otssolutions.com",
      gender: "Female",
    },
    {
      firstName: "Sahil",
      lastName: "Singh",
      email: "sahil@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Amit",
      lastName: "Sahani",
      email: "amit@otssolutions.com",
      gender: "Male",
    },
  ];

  const options = [
    {
      key: "ascending",
      text: "Ascending Order",
      value: "ascending",
    },
    {
      key: "descending",
      text: "Descending Order",
      value: "descending",
    },
  ];

  const handleSort = (event) => {
    setOrder(event);
    // console.log(event);
  };

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (order == "ascending") {
      //  sort by String property ASCENDING (A - Z)

      const strAscending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );

      console.log(strAscending);

      setTraineesList(strAscending);
    } else if (order == "descending") {
      //  sort by String property DESCENDING (Z - A)

      const strDescending = [...mockTraineesData].sort((a, b) =>
        a.firstName > b.firstName ? -1 : 1
      );

      console.log(strDescending);

      setTraineesList(strDescending);
    }
  }, [order]);

  return (
    <>
      <Header as="h1">Trainees</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >
        <Input
          style={{ width: "25rem" }}
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* 
        <div>
          <select
            name="sort"
            id="sort"
            onChange={handleSort}
            style={{
              padding: "10px",
              border: "1px solid #d5d5d5",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
          >
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending Order</option>
          </select>
        </div> */}

        <div>
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
              onChange={(e, { value }) => handleSort(value)}
            />
          </Button.Group>
        </div>
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
        />
      </div>
    </>
  );
};

export default TraineesComponent;
