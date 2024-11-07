# LumelAssesment
Simple Hierarchical Table Website
import {useState} from "react"
export default function App() {
    const [varPercent, setVarPercent] = useState("0%")
  return <>
  <table>
      <tr>
      <th>Lable</th>
      <th>Value</th>      
      <th>Input</th>      
      <th>Allocation %</th>      
      <th>Allocation Val</th>
      <th>Variance %</th>
      </tr>
      <tr>
      <td>Electronics</td>
      <td>1500</td>
      <td><input type="number" placeholder="input your value"></input></td>
      <td><button>Increase%</button></td>
      <td><button>Sum Value</button></td>
      <td>{varPercent}</td>
      </tr>
      <tr>
      <td>--Phones</td>
          <td>800</td>
          <td><input type="number" placeholder="input your value"></input></td>
          <td><button>Increase%</button></td>
          <td><button>Sum Value</button></td>
          <td>{varPercent}</td>
      </tr>
      <tr>
      <td>--Laptops</td>
          <td>700</td>
          <td><input type="number" placeholder="input your value"></input></td>
          <td><button>Increase%</button></td>
          <td><button>Sum Value</button></td>
          <td>{varPercent}</td>
      </tr>
      <tr>
      <td>Furniture</td>
          <td>1000</td>
          <td><input type="number" placeholder="input your value"></input></td>
          <td><button>Increase%</button></td>
          <td><button>Sum Value</button></td>
          <td>{varPercent}</td>
          <td></td>
      </tr>
      <tr>
      <td>--Tables</td>
          <td>300</td>
          <td><input type="number" placeholder="input your value"></input></td>
          <td><button>Increase%</button></td>
          <td><button>Sum Value</button></td>
          <td>{varPercent}</td>
      </tr>
      <tr>
      <td>--Chairs</td>
          <td>700</td>
          <td><input type="number" placeholder="input your value"></input></td>
          <td><button>Increase%</button></td>
          <td><button>Sum Value</button></td>
          <td>{varPercent}</td>
      </tr>
  </table>
  </>
}
