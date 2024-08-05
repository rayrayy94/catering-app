import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Common/Header/Header";

export default function Path() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Header />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
