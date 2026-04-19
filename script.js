window.onload = function() {
    document.getElementById('consentButton').addEventListener('click', function() {
        // GoogleフォームのURLリスト
        var forms = [
            "https://docs.google.com/forms/d/e/1FAIpQLSfF1lCqtsCnbt3iiQzNXP9TEwg6xF1eker_JaGFypE_nrLxtw/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSfNBjHbdRk6kizDguUsXs24ruiD5VyGpaM5j8GxjkcycYtChg/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSewyk-nHXR6bFpbBKU3t0Mb2NZBmmGVk0o26zE0WWZ-T3SiKA/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSdBfHqLZ5szpzgY-eF7IjMR0qFtkevHdd05_zbAJKIZqbpcPA/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSfVIgupvre9HVeHlm1gpNjxlIBBEnwUkbi2g7_iMRWZJGtPrA/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSfdTJFNh5Ibp6ddY88MaSg6fpMlzgPxhAyX3fTSyqitRdRMuA/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSdpeKGBFJXDFYdKyg2sjAGu-cTzQsJTAopfifhsxukOws24aA/viewform?usp=publish-editor",
            "https://docs.google.com/forms/d/e/1FAIpQLSfz64YlZZpcROim9OMdnEikRLMLqzClfsmi5PfukThCFs3PfA/viewform?usp=publish-editor"
        ];

        // ランダムなURLを選択
        var randomIndex = Math.floor(Math.random() * forms.length);
        var randomFormUrl = forms[randomIndex];

        // 選択されたURLにリダイレクト
        window.location.href = randomFormUrl;
    });
};

