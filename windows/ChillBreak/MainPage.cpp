// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\windows\ChillBreak\MainPage.cpp

#include "pch.h"
#include "MainPage.h"
#include "App.h"

using namespace ChillBreak;
using namespace Windows::UI::Xaml;

MainPage::MainPage()
{
    InitializeComponent();
    // Set the main application view
    auto app = ref new App();
    app->Run();
}