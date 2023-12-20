import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FAQData from "./faq.json";

function FAQ() {
  return (
    <div className="relative bg-white flex items-center justify-center py-8 flex-col">
      <h3 className="font-bold mb-2 text-2xl">
        Freqently Asked Questions (FAQ)
      </h3>
      <div className="w-2/3 rounded-xl shadow-lg">
        {FAQData.map((items, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={items.key - items.content}
              id={index}
            >
              <Typography style={{ fontFamily: "inherit", fontWeight: 600 }}>
                {items.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontFamily: "inherit" }}>
                {items.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
