import { FaDiscord, FaTelegram } from "react-icons/fa"
import { IoIosBarcode } from "react-icons/io"
import {
  LuArrowLeft,
  LuCheck,
  LuDatabase,
  LuMail,
  LuMoon,
  LuSunMedium,
  LuUser,
  LuUsers,
} from "react-icons/lu"

type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  sun: LuSunMedium,
  moon: LuMoon,
  discord: FaDiscord,
  user: LuUser,
  guild: LuUsers,
  left: LuArrowLeft,
  database: LuDatabase,
  mail: LuMail,
  check: LuCheck,
  barcode: IoIosBarcode,
  telegram: FaTelegram,
}

export const Icons: IconsType = icons
