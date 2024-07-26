import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";



const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
    console.log("user information", user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        window.location.reload()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <div className="flex items-center ">
        <a href='/'>
        <img
          className=" w-[170px] h-full block"
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
        />
        </a>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <a href='/create-trip'>
            <Button variant=" outline" className="rounded-full bg-gray-200">
            ➕ Create Trip
            </Button>
            </a>
            <a href='/my-trips'>
            <Button variant=" outline" className="rounded-full bg-gray-200">
            My Trip
            </Button>
            </a>
            <Popover>
              <PopoverTrigger>     <img
              src={user?.picture}
              className="h-[40px] w-[40px] rounded-full"
            /></PopoverTrigger>
              <PopoverContent>
               <h2 className="cursor-pointer" onClick={()=> {
                googleLogout();
                localStorage.clear();
             window.location.reload();
               }}>Log Out</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() =>setOpenDialog(true) }> Sign in</Button>
          
        )}
      </div>
      <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img
                  className=" w-[140px]"
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                />
                <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
                <p>Sign in to the App with Google authentication securely</p>
                <Button
              
                  onClick={login}
                  className="w-full mt-5 flex gap-4 items-center"
                >
                    Sign in With Google
                    <FcGoogle className="-ml-3 w-5 h-5" />
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default Header;
