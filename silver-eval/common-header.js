/**
 * 샘플 HTML용 공통 헤더 삽입 스크립트.
 * 각 샘플 파일 body 최상단에 <div id="common-header"></div> 를 두고,
 * 이 스크립트를 로드하면 자동으로 헤더가 삽입된다.
 */
(function () {
  var html = ''
    + '<nav class="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">'
    + '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">'
    + '<div class="flex items-center gap-6">'
    + '<a href="#" class="flex items-center gap-2">'
    + '<iconify-icon icon="solar:shield-check-bold" class="text-blue-400 text-lg"></iconify-icon>'
    + '<span class="text-sm font-semibold text-white tracking-tight" style="word-break:keep-all">품질관리시스템</span>'
    + '</a>'
    + '<div class="flex items-center gap-1 text-sm">'
    + navMenu('종합평가', [
        ['#', '지표구조관리'], ['#', '평가지표관리'], ['#', '평가결과등록'],
        ['#', '평가결과'], ['#', '통계'], ['#', 'FAQ'], ['#', '질의응답']
      ])
    + navMenu('상시점검', [
        ['#', '지표구조관리'], ['#', '지표관리'], ['#', '결과 등록'], ['#', '결과 조회']
      ])
    + navMenu('시스템관리', [
        ['#', '사용자 관리'], ['#', '평가위원 배정'], ['#', '사용자 정보'], ['#', '코드 관리']
      ])
    + navMenu('기타', [
        ['#', '공지사항'], ['#', '이의제기'], ['#', '일정공유']
      ])
    + '</div></div>'
    + '<div class="flex items-center gap-3">'
    + '<span class="text-xs text-slate-400">admin님</span>'
    + '<button class="text-xs text-slate-500 hover:text-white transition-colors" onclick="toast(\'로그아웃\',\'info\')">로그아웃</button>'
    + '</div></div></nav>';

  function navMenu(title, items) {
    var links = '';
    for (var i = 0; i < items.length; i++) {
      links += '<a href="' + items[i][0] + '" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">' + items[i][1] + '</a>';
    }
    return '<div class="nav-menu relative">'
      + '<button class="nav-trigger px-3 py-1 text-slate-400 hover:text-white rounded transition-colors">' + title + '</button>'
      + '<div class="nav-dropdown hidden absolute top-full left-0 mt-1 w-44 bg-white rounded-md shadow-lg border border-slate-200 py-1 z-50">'
      + links + '</div></div>';
  }

  // 삽입
  var target = document.getElementById('common-header');
  if (target) {
    target.innerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  // 드롭다운 hover
  document.querySelectorAll('.nav-menu').forEach(function (menu) {
    menu.addEventListener('mouseenter', function () { menu.querySelector('.nav-dropdown').classList.remove('hidden'); });
    menu.addEventListener('mouseleave', function () { menu.querySelector('.nav-dropdown').classList.add('hidden'); });
  });
})();
