import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = [
    { title: 1, tags: ['tech', 'backend'], description: 'My name is anukriti' },
    {
      title: 2,
      tags: ['frontend', 'backend'],
      description: 'My name is anukriti',
    },
    {
      title: 3,
      tags: ['tech', 'backend'],
      description:
        'My name is anukriti gfdhkjg fndsjkg sjfhjks bgjhsr hgjrhg nfjshgj hgbjdsg fjdsshgkjdhjgds g smgbsn gdsnbgjd gbfjkv sd nngnsd vkjsbgvmdfs gjf vmnfsbgv z gf vmndsbgvzd fdsvmndsbvmcx vbx fxjgv z gbmxvmnsf v cz fmzc  semnvzmnf d v sdv  dzn fmnd vnsbmvd mng fx v dsmvdznbgmd  gnms   vdsjmgmv dzd gbbmfv mabvmzd mgnx c c dsmnvdzbfmd zmvnbdxdm znfvbnz x fvjhnx  zbc mvbfjv xzmnvbvmnx vmn vmcz hgxcn v dm vmndbmv zdvzx nbfmc vmnfsbvmc zmgbvmcgfjxfc,mfkgcxgkjfb,mdfhgbnfddsjkgcngkf bfdmjbgx  jdf cx bgmn v mdrg cx mdss v dbgmmf v,msrbgdv sdbv dmbd v mdnab vmd v dfvdsmg  vx bmjdrbg cxv xnbgjd   dfngn,df v f kjrbv ṣx gjrgcx bmdhtkgjf v sbkjr',
    },
    { title: 4, tags: ['fullstack'], description: 'My name is anukriti' },
    { title: 5, tags: ['sap'], description: 'My name is anukriti' },
    { title: 6, tags: ['tech', 'backend'], description: 'My name is anukriti' },
  ];
}
