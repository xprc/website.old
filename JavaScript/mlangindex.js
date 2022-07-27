var tnum = 'cn';

$(document).ready(function(){
  
  $(document).click( function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');     
  });
  
  $('.translate_wrapper .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent().toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
  });
  

  /*TRANSLATE*/
  translate(tnum);
  
  $('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');  
    
    var img = $(this).find('img').attr('src');    
    var lang = $(this).attr('data-value');
    var tnum = lang;
    translate(tnum);
    
    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);
    
    if(lang == 'ar'){
      $('body').attr('dir', 'rtl');
    }else{
      $('body').attr('dir', 'ltr');
    }
    
  });
});

function translate(tnum){
  $('strong#title').text(trans[0][tnum]);
  $('marquee#coll').text(trans[1][tnum]);
  $('a#dlu').text(trans[2][tnum]);
  $('marquee#hua').text(trans[3][tnum]);
  $('a#s1').text(trans[4][tnum]);
  $('a#s2').text(trans[5][tnum]);
  $('a#s3').text(trans[6][tnum]);
  $('a#s4').text(trans[7][tnum]);
  $('a#s5').text(trans[8][tnum]);
  $('a#s6').text(trans[9][tnum]);
  $('a#s7').text(trans[10][tnum]);
  $('a#s8').text(trans[11][tnum]);
  $('a#s9').text(trans[12][tnum]);
  $('span#namesz').text(trans[13][tnum]);
}

var trans = [ 
  { 
    en : 'Welcome to TOMS PROJECT Studio!',
    cn : 'TOMS PROJECT 工作室欢迎你！',
    tw : 'TOMS PROJECT工作室歡迎你！',
    jp : 'TOMS PROJECTスタジオはあなたを歓迎します！',
    ar : '  مشروع  الاستوديو  تومس  بكم!  '
  },{ 
    en : " You don't seem to be logged in yet. Click on the right side to log in immediately! ---> ",
    cn: '您貌似还没有登录，点击右侧|登录|马上登录！--->',
    tw : '您貌似還沒有登錄，點擊右側|登入|馬上登入！--->',
    jp :'ログインしていないので、右側のログインをクリックしてください! --->',
    ar : 'كنت   على ما يبدو   لم تسجيل الدخول   ، انقر فوق   تسجيل   الدخول على   اليمين   على الفور   !   ---   >'
  },{ 
    en : '|Sign in|',
    cn : "| 登录 |",
    tw:'| 登入 |',
    jp:'登録する',
    ar : 'تسجيل الدخول'
  },{
  	en:'Hello! Welcome to the official website of TOMS PROJECT!',
  	cn:' 您好！欢迎光临“TOMS PROJECT”官方网站!',
  	tw:'您好！歡迎光臨“TOMS PROJECT”官方網站！',
  	jp:'こんにちは！ようこそ「TOMS PROJECT」公式サイト！',
  	ar:'مرحبا!   مرحبا بكم في   "   المشروع   تومس   "   الموقع الرسمي   !'
  },{
  	en:'News',
  	cn:'最新动态',
  	tw:'最新動態',
  	jp:'最新の動態'
  },{
  	en:'Shared files',
  	cn:'共享文件',
  	tw:'共用檔',
  	jp:'共有ファイル'
  },{
  	en:'Watch Video',
  	cn:'观看视频',
  	tw:'觀看視頻',
  	jp:'動画を見る'
  },{
  	en:'Software resources',
  	cn:'软件资源',
  	tw:'軟件資源',
  	jp:'ソフトウェア資源'
  },{
  	en:"Project's files",
  	cn:'项目文件',
  	tw:'項目檔案',
  	jp:'プロジェクトファイル'
  },{
  	en:'Downloads',
  	cn:'资源下载',
  	tw:'資源下載',
  	jp:'リソースのダウンロード'
  },{
  	en:'About',
  	cn:'关于我们',
  	tw:'關於我們',
  	jp:'私たちについて'
  },{
  	en:'Join us',
  	cn:'加入我们',
  	tw:'加入我們',
  	jp:'私たちに参加する'
  },{
  	en:'Leaving a message',
  	cn:'留言',
  	tw:'留言',
  	jp:'伝言'
  },{
  	en:'This website is developed and produced by Zhang Yangyang',
  	cn:'本站由 张阳扬 开发制作',
  	tw:'本站由 張陽揚 開發製作',
  	jp:'本サイトは張陽揚の開発によって作成されました。'
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  },{
  	en:'',
  	cn:'',
  	tw:'',
  	jp:''
  }
  
];