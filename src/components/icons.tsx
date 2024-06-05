import { Discord } from "flowbite-react-icons/solid"
import {
  ArrowLeft,
  CheckCheck,
  Contact,
  Database,
  Mail,
  Moon,
  ScanBarcode,
  SunMedium,
  User,
  Users,
} from "lucide-react"

type IconKeys = keyof typeof icons

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
  contact: Contact,
}

export const Icons: IconsType = icons
