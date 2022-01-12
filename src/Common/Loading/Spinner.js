import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Spinner = (props) => {
  const { isSpinnerOpen, spinnerText } = props;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isSpinnerOpen}
      // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
      <p style={{ margin: 10 }}>{spinnerText}</p>
    </Backdrop>
  );
};
Spinner.defaultProps = {
  spinnerText: "Loading ...",
};
export { Spinner };
