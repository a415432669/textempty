import { Component } from '@angular/core';
//angular核心模块里导入组件装饰器
//装饰器定义组件元数据
//相当于组件名称
//组件模板文件，定义组件布局和内容
//模板的css样式文件
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello laochen';
}
