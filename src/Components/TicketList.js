import React from "react";
import Ticket from "./Ticket.js";

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Child component isn\'t rendering.'
  }
];

const TicketList = () => {
  return (
    <React.Fragment>
      <hr />
      {mainTicketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          issue={ticket.location}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default TicketList;