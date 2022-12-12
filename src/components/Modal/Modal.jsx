import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import image from "../../images/user.png";
import { useState } from "react";
import {
  createUser,
  logOut,
  signIn,
  signUpProvider,
} from "../../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiMoon, BiCart, BiSun, BiDoorOpen } from "react-icons/bi";
import { toast } from "react-toastify";

export const Modale = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dek, setDek] = useState(false);
  const [usere, setUser] = useState({
    displayName: "",
    password: "",
    email: "",
  });

  
  const { user } = useSelector((state) => state.auth);
//   console.log(user);
  const handleClickOpen = () => {
    // setUser({ displayName: "", password: "", email: "" });
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault()
  
if (dek & usere.email !="" & usere.password != ""){
     setOpen(false);
     setDek(true);
   
    signIn(
          usere.email,
          usere.password,
          navigate,
          dispatch
        )}  
else if (!dek & usere.displayName != "" & usere.email !="" & usere.password != ""){
     setOpen(false);
     setDek(true);
   
createUser(
          usere.displayName,
          usere.email,
          usere.password,
          navigate,
          dispatch
        );
    }
    else{
        toast.error("Incorrect Operation!!!")
    }

  
  }

  const handleKapat=()=>{
     setOpen(false);

  }

  return (
    <div>
      <div className="bakar">
        <Button onClick={handleClickOpen}>
          <img src={image} alt="" />
        </Button>
        <span style={{}}>{user?.username}</span>
        {user?.username && (
          <BiDoorOpen
            style={{ margin: "0 1rem" }}
            title="Exit"
            onClick={() => logOut(navigate, dispatch)}
            size="2rem"
          />
        )}
      </div>
      <Dialog open={open} onClose={handleKapat}>
        <DialogTitle>{dek ? "Login" : "Register"}</DialogTitle>
        <DialogContent>
          {!dek && (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Surname"
              type="name"
              fullWidth
              required
              variant="standard"
              value={usere?.displayName}
              onChange={(e) =>
                setUser({ ...usere, displayName: e.target.value })
              }
            />
          )}

          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            required
            variant="standard"
            value={usere?.email}
            onChange={(e) => setUser({ ...usere, email: e.target.value })}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            required
            fullWidth
            variant="standard"
            value={usere?.password}
            onChange={(e) => setUser({ ...usere, password: e.target.value })}
          />
        </DialogContent>
        {!dek ? (
          <Button onClick={() => setDek(!dek)}>
            I already have an account!
          </Button>
        ) : (
          <Button onClick={() => setDek(!dek)}>Create account!</Button>
        )}
        <DialogActions>
          <Button onClick={handleKapat}>Close</Button>
          {!dek && <Button onClick={handleClose}>Subscribe</Button>}
          {dek && <Button onClick={handleClose}>Login</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};
