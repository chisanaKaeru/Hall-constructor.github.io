function createTable(){
  let storage = localStorage.getItem("milking-parlor");
  if (storage == 'УДЕ') {
    document.getElementById("button-help").setAttribute("class", "button align-button text-body button-help");
    document.getElementById("table").innerHTML = `
    <tr>
      <th rowspan="5">Установка</th>
      <th rowspan="5">Число станков</th>
      <th rowspan="5">Число дояров</th>
      <th rowspan="5">Пропускная способность установки в час, коров</th>
      <th colspan="4">Система содержания</th>
    </tr>
    <tr>
      <th colspan="2">пастбищная</th>
      <th colspan="2">беспастбищная</th>
    </tr>
    <tr>
      <th colspan="4">Организация доения</th>
    </tr>
    <tr>
      <th colspan="2">односменная</th>
      <th colspan="2">двухсменная</th>
    </tr>
    <tr>
      <th>2-разовое</th>
      <th>3-разовое</th>
      <th>2-разовое</th>
      <th>3-разовое</th>
    </tr>
    <tr>
      <th rowspan="6">«Елочка»</th>
      <td>2x6</td>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2x8</td>
      <td>1</td>
      <td>65-93</td>
      <td>158</td>
      <td>158</td>
      <td>395</td>
      <td>316</td>
    </tr>
    <tr>
      <td>2x10</td>
      <td>1</td>
      <td>78-96</td>
      <td>174</td>
      <td>174</td>
      <td>435</td>
      <td>348</td>
    </tr>
    <tr>
      <td>2x12</td>
      <td>1</td>
      <td>86-102</td>
      <td>192</td>
      <td>192</td>
      <td>480</td>
      <td>384</td>
    </tr>
    <tr>
      <td>2x14</td>
      <td>2</td>
      <td>112-136</td>
      <td>248</td>
      <td>248</td>
      <td>620</td>
      <td>496</td>
    </tr>
    <tr>
      <td>2x16</td>
      <td>2</td>
      <td>132-156</td>
      <td>288</td>
      <td>288</td>
      <td>720</td>
      <td>576</td>
    </tr>`;
  } else if (storage == 'УДП') {
    {
      document.getElementById("button-help").setAttribute("class", "button align-button text-body button-help");
      document.getElementById("table").innerHTML = `
      <tr>
        <th rowspan="5">Установка</th>
        <th rowspan="5">Число станков</th>
        <th rowspan="5">Число дояров</th>
        <th rowspan="5">Пропускная способность установки в час, коров</th>
        <th colspan="4">Система содержания</th>
      </tr>
      <tr>
        <th colspan="2">пастбищная</th>
        <th colspan="2">беспастбищная</th>
      </tr>
      <tr>
        <th colspan="4">Организация доения</th>
      </tr>
      <tr>
        <th colspan="2">односменная</th>
        <th colspan="2">двухсменная</th>
      </tr>
      <tr>
        <th>2-разовое</th>
        <th>3-разовое</th>
        <th>2-разовое</th>
        <th>3-разовое</th>
      </tr>
      <tr>
        <th rowspan="11">«Параллель»</th>
        <td>1x8</td>
        <td>1</td>
        <td>44-58</td>
        <td>100</td>
        <td>100</td>
        <td>250</td>
        <td>204</td>
      </tr>
      <tr>
        <td>1x12</td>
        <td>1</td>
        <td>55-69</td>
        <td>100</td>
        <td>100</td>
        <td>300</td>
        <td>248</td>
      </tr>
      <tr>
        <td>2x8</td>
        <td>1</td>
        <td>72-92</td>
        <td>150</td>
        <td>150</td>
        <td>400</td>
        <td>328</td>
      </tr>
      <tr>
        <td>2x10</td>
        <td>1</td>
        <td>84-106</td>
        <td>190</td>
        <td>190</td>
        <td>475</td>
        <td>380</td>
      </tr>
      <tr>
        <td>2x12</td>
        <td>1</td>
        <td>92-114</td>
        <td>210</td>
        <td>210</td>
        <td>515</td>
        <td>412</td>
      </tr>
      <tr>
        <td>2x14</td>
        <td>2</td>
        <td>120-138</td>
        <td>240</td>
        <td>240</td>
        <td>645</td>
        <td>516</td>
      </tr>
      <tr>
        <td>2x16</td>
        <td>2</td>
        <td>136-160</td>
        <td>300</td>
        <td>300</td>
        <td>740</td>
        <td>592</td>
      </tr>
      <tr>
        <td>2x18</td>
        <td>2</td>
        <td>154-172</td>
        <td>320</td>
        <td>320</td>
        <td>860</td>
        <td>652</td>
      </tr>
      <tr>
        <td>2x20</td>
        <td>2</td>
        <td>170-206</td>
        <td>400</td>
        <td>400</td>
        <td>940</td>
        <td>752</td>
      </tr>
      <tr>
        <td>2x24</td>
        <td>2</td>
        <td>192-224</td>
        <td>416</td>
        <td>416</td>
        <td>1040</td>
        <td>832</td>
      </tr>
      <tr>
        <td>2x30</td>
        <td>2</td>
        <td>246-288</td>
        <td>536</td>
        <td>536</td>
        <td>1335</td>
        <td>1068</td>
      </tr>`;
    }
  }
}