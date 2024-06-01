import { Discord } from "flowbite-react-icons/solid"
import {
  ArrowLeft,
  CheckCheck,
  Database,
  Mail,
  Moon,
  ScanBarcode,
  SunMedium,
  User,
  Users,
} from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  sun: SunMedium,
  moon: Moon,
  discord: Discord,
  user: User,
  guild: Users,
  left: ArrowLeft,
  database: Database,
  mail: Mail,
  check: CheckCheck,
  barcode: ScanBarcode,
}

export const Icons: IconsType = icons
