function txtPetleCw1(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'int wynik=0, kolejna=0;' + '\n'
    + + '\n'
    +'int main() ' + '\n'
    +'{' + '\n'
    +'   while (wynik&lt;=75)' + '\n'
    +'    {' + '\n'
    +'        cout &lt;&lt; "Podaj liczbe : ";' + '\n'
    +'        cin >> kolejna;' + '\n'
    +'        wynik+=kolejna;' + '\n'
    +'    }' + '\n'
    +'    cout &lt;&lt; wynik;' + '\n'
    +'    return 0;' + '\n'
    +'}'
    );
document.close();
}

function txtPetleCw2(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int n, m;' + '\n'
    + '\n'
    +'int main()' + '\n' 
    +'{' + '\n'
    +'    cout &lt;&lt; "Podaj wartosc minimalna : ";' + '\n'
    +'    cin >> n;' + '\n'
    +'    cout &lt;&lt; "Podaj wartosc maksymalna : ";' + '\n'
    +'    cin >> m;' + '\n'
    + '\n'
    +'    for (n>0; n&lt;=m; n++)' + '\n'
    +'        cout &lt;&lt; n &lt;&lt; " ";' + '\n'
    + '\n'   
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}

function txtPetleCw3(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int n, m=0;' + '\n'
    + '\n'
    +'int main()' + '\n' 
    +'{' + '\n'
    +'    cout &lt;&lt; "Podaj liczbe : ";' + '\n'
    +'    cin >> n;' + '\n'
    +        
    +'    for (m=0; m&lt;=n; m++)' + '\n'
    +'        cout &lt;&lt; m*m &lt;&lt; endl;' + '\n'
    + '\n'
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}

function txtPetleCw4(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int main()' + '\n' 
    +'{' + '\n'
    +'    for (int i=10; i&lt;=99; i++)' + '\n'
    +'    {' + '\n'
    +'        if (i%3==0)' + '\n'
    +'        cout &lt;&lt; i &lt;&lt; " ";' + '\n'
    +'    }' + '\n'
    + '\n'    
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}

function txtPetleCw5(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int staz=1, zarobek=1000, lata;' + '\n'
    + '\n'
    +'void awans()' + '\n'
    +'{' + '\n'
    +'    zarobek*=1.1;' + '\n'
    +'    lata--;' + '\n'
    +'    staz++;' + '\n'
    +'}' + '\n'
    + '\n'
    +'void drukuj()' + '\n'
    +'{'
    +'    cout &lt;&lt; "Zarabialbys " &lt;&lt; zarobek &lt;&lt; " po " &lt;&lt; staz &lt;&lt; " latach stazu." &lt;&lt; endl;' + '\n'
    +'}' + '\n'
    + '\n'
    +'int main()' + '\n' 
    +'{' + '\n'
    + '\n'    
    +'    cout &lt;&lt; "Podaj liczbe lat : ";' + '\n'
    +'    cin >> lata;' + '\n'
    + '\n'   
    +'    while (lata>0)' + '\n'
    +'    {' + '\n'
    +'    drukuj();' + '\n'
    +'    awans();' + '\n'
    +'    }' + '\n'
    + '\n'
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}

function txtTabliceCw1(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int tab[5], tab2[5], suma1, suma2, y;' + '\n'
    + '\n'
    +'void oblicz()' + '\n'
    +'{' + '\n'
    +'    int i=0;' + '\n'
    +'    while(i&lt;5)' + '\n'
    +'    {' + '\n'
    +'        suma1+=tab[i];' + '\n'
    +'        i++;' + '\n'
    +'        cout &lt;&lt; suma1 &lt;&lt; endl;' + '\n'
    +'    }' + '\n'
    +'}' + '\n'
    + '\n'
    +'void oblicz2()' + '\n'
    +'{' + '\n'
    +'    int i=0;' + '\n'
    +'    while(i&lt;5)' + '\n'
    +'    {' + '\n'
    +'        suma2+=tab2[i];' + '\n'
    +'        i++;' + '\n'
    +'        cout &lt;&lt; suma2 &lt;&lt; endl;' + '\n'
    +'    }' + '\n'
    +'}' + '\n'
    + '\n'
    +'int main()' + '\n' 
    +'{' + '\n'
    +'    cout &lt;&lt; "Podaj piec liczb :" &lt;&lt; endl;' + '\n'
    +'    for(int x=0; x&lt;5; x++)' + '\n'
    +'    {' + '\n'
    +'    cin >> y;' + '\n'
    +'    tab[x] = y;' + '\n'
    +'    }' + '\n'
    + '\n'    
    +'    cout &lt;&lt; "Podaj piec liczb :" &lt;&lt; endl;' + '\n'
    +'    for(int x=0; x&lt;5; x++)' + '\n'
    +'    {' + '\n'
    +'    cin >> y;' + '\n'
    +'    tab2[x] = y;' + '\n'
    +'    }' + '\n'
    + '\n'
    +'    oblicz();' + '\n'
    +'    oblicz2();' + '\n'
    + '\n'
    +'    if(suma1==suma2)' + '\n'
    +'    {' + '\n'
    +'        cout &lt;&lt; "Sumy tabel sa rowne.";' + '\n'
    +'        return 0;' + '\n'
    +'    }' + '\n'
    + '\n'
    +'    if(suma1>suma2)' + '\n'
    +'    {' + '\n'
    +'        cout &lt;&lt; "Suma pierwszej tabeli jest wieksza.";' + '\n'
    +'    }' + '\n'
    +'    else' + '\n'
    +'    {' + '\n'
    +'        cout &lt;&lt; "Suma drugiej tabeli jest wieksza.";' + '\n'
    +'    }' + '\n'
    + '\n'    
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}

function txtSrand(){
document.open();
document.write('\n'
    +'#include &lt;iostream&gt;' + '\n'
    +'#include &lt;cstdlib&gt;' + '\n'
    +'#include &lt;ctime&gt;' + '\n'
    + '\n'
    +'using namespace std;' + '\n'
    + '\n'
    +'int main()' + '\n'
    +'{' + '\n'
    +'    srand(time(NULL));' + '\n'
    + '\n'
    +'    cout &lt;&lt; "Losowa liczba : " &lt;&lt; rand() &lt;&lt; endl;' + '\n'
    +'    cout &lt;&lt; "Losowa liczba od 1 do 10 : " &lt;&lt; rand() % 10 + 1 &lt;&lt; endl;' + '\n'
    +'    cout &lt;&lt; "Losowa liczba od 1 do 1000 : " &lt;&lt; rand() % 1000 + 1 &lt;&lt; endl;' + '\n'
    +'    cout &lt;&lt; "Losowa liczba od 100 do 10000 : " &lt;&lt; rand() % 10000 + 100 &lt;&lt; endl;' + '\n'
    +'    cout &lt;&lt; "Losowa liczba od -30 do 0 : " &lt;&lt; -rand() % 30 + 0 &lt;&lt; endl;' + '\n'
    + '\n'
    +'    return 0;' + '\n'
    +'}' + '\n'
    );
document.close();
}
