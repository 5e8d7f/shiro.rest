import { ShoppingCart } from "lucide-react"
import { FaDiscord, FaTelegram } from "react-icons/fa"
import { IoIosBarcode } from "react-icons/io"
import {
  LuArrowLeft,
  LuBitcoin,
  LuCheck,
  LuDatabase,
  LuLoader2,
  LuMail,
  LuMoon,
  LuSunMedium,
  LuUser,
  LuUsers,
  LuX,
} from "react-icons/lu"
import { TbShoppingCartExclamation, TbShoppingCart } from "react-icons/tb"

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
  close: LuX,
  bitcoin: LuBitcoin,
  shoppingCart: TbShoppingCart,
  invalidShoppingCart: TbShoppingCartExclamation,
  loading: LuLoader2,
}

export const Icons: IconsType = icons
