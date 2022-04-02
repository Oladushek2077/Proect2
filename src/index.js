
import { ALL_COIN1 } from "./JS/api";
import { burgerFun } from "./JS/burger";
import { funModal } from "./JS/modal";
import { Chart, registerables } from 'chart.js'
import * as _ from 'lodash'
import zoomPlugin from 'chartjs-plugin-zoom'


import "./Style/modal.css"
import "./Style/style1.css"

ALL_COIN1();
funModal()
Chart.register(...registerables, zoomPlugin)

burgerFun()




