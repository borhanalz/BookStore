import React from 'react'
import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import ChartText from './ChartText';
export default function Chart() {
 
    const data = [
        { month: 'اکشن', sales: 35 }, { month: 'درسی', sales: 28 },
        { month: 'انگلیسی', sales: 34 }, { month: 'مقاله', sales: 32 },
        { month: 'اموزشی', sales: 40 }, { month: 'پادکست', sales: 32 },
        { month: 'فنی', sales: 35 }, { month: 'رمان', sales: 55 },
        { month: 'ترسناک', sales: 38 }, { month: 'مهارتی', sales: 30 },
        { month: 'شعر', sales: 25 }, { month: 'داستان', sales: 32 }
    ];
    const primaryxAxis = { valueType: 'Category' };
    const primaryyAxis = { labelFormat: '{value}هزار نفر' };

    return( 
           <>
                 <div className="title_chart d-inline-block mb-5"><h2 className='fw-bold text-light'>کاربران بیشتر کدام موضوعات را مطالعه کردند ؟</h2></div>
                 <ChartComponent id="charts" primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
                 <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
                 <SeriesCollectionDirective>
                   <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'/>
                 </SeriesCollectionDirective>
                 </ChartComponent>
                 <ChartText/>
           </>
  )
}
