// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import InventoryOutline from '@mui/icons-material/Inventory2Outlined';
import MonetizedOutline from '@mui/icons-material/MonetizationOnOutlined';
import AssignmentOutline from '@mui/icons-material/AssignmentTurnedInOutlined';
import FolderSpecialOutline from '@mui/icons-material/FolderSpecialOutlined';
import EngineeringOutline from '@mui/icons-material/EngineeringOutlined';
import PeopleOutline from '@mui/icons-material/PeopleOutlineOutlined';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Inventory',
      icon: InventoryOutline,
      path: ''
    },
    {
      title: 'Cash',
      icon: MonetizedOutline,
      path: ''
    },
    {
      title: 'Attendance',
      icon: AssignmentOutline,
      path: ''
    },
    {
      title: 'Assistant',
      icon: PeopleOutline,
      path: ''
    },
    {
      title: 'File',
      icon: FolderSpecialOutline,
      path: ''
    },
    {
      title: 'Role',
      icon: EngineeringOutline,
      path: ''
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
