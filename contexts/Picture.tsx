import { ReactNode, createContext, useState, useContext } from "react";
import { CameraCapturedPicture } from "expo-camera";
import { router } from "expo-router";
import { Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { Buffer } from "buffer";

type PictureContextType = {
  picture: CameraCapturedPicture | null;
  scanPicture: (picture: CameraCapturedPicture) => void;
};

export const PictureContext = createContext({} as PictureContextType);

export function usePicture() {
  const picture = useContext(PictureContext);
  return picture;
}

type PictureProviderProps = {
  children: ReactNode;
};

export function PictureProvider({ children }: PictureProviderProps) {
  const [picture, setPicture] = useState<CameraCapturedPicture | null>(null);

  async function scanPicture(picture: CameraCapturedPicture) {
    const isMatch = await matchPicture(picture);
    if (isMatch) {
      setPicture(picture);
      router.push("/(tabs)/scanner/viewer");
    } else {
      Alert.alert("Picture didn't match!");
    }
  }

  // Returns whether the picture matched our database or not.
  async function matchPicture(picture: CameraCapturedPicture): Promise<any> {
    const base64 = await FileSystem.readAsStringAsync(picture.uri, {
      encoding: "base64",
    });
    const buffer = Buffer.from(base64, "base64");

    await fetch("https://3oaxvxorz3.execute-api.us-east-1.amazonaws.com/Prod/hello/", {
      method: "POST",
      headers: {
        "Content-Type": "image/jpeg; charset=utf-8",
      },
      body: buffer,
    })
      .then((response) => {
        console.log(response);
        console.log("image uploaded");
      })
      .catch((err) => {
        console.log(err);
      });

    // Temporary code below.
    return Math.random() < 0.5 ? true : false;
  }

  return (
    <PictureContext.Provider
      value={{
        picture,
        scanPicture,
      }}
    >
      {children}
    </PictureContext.Provider>
  );
}
