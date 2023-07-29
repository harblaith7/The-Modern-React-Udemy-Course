import { useEffect, useState } from "react";
import cities from "../data/cities.json";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Location = [city: string, providence: string];

export default function FindCityModal() {
  const [citySearch, setCitySearch] = useState("");
  const [citySuggestions, setCitySuggestions] = useState<Location[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const citiesFiltered: Location[] = cities.filter((location: Location) =>
      location[0].toLowerCase().startsWith(citySearch.toLowerCase())
    );
    setCitySuggestions(citiesFiltered);
  }, [citySearch]);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="w-[700px] m-auto justify-between items-start text-black py-14">
              <div className="w-full">
                <h3 className="font-semibold text-2xl">From</h3>
                <input
                  type="text"
                  className="border-b w-full outline-none mt-4 pb-4 bg-white"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                />
                <div>
                  {citySuggestions.map((location) => (
                    <button className="border-b w-full py-3 hover:bg-gray-100 text-left px-1 capitalize">
                      <span>{location[0]}</span>, <span>{location[1]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
