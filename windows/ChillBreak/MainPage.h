// filepath: ChillBreak/windows/ChillBreak/MainPage.h

#pragma once

#include "winrt/Windows.UI.Xaml.Controls.h"
#include "winrt/Windows.UI.Xaml.h"
#include "winrt/Windows.UI.Xaml.Navigation.h"

namespace ChillBreak::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();

        void OnNavigatedTo(Windows::UI::Xaml::Navigation::NavigationEventArgs const& e);
        void OnNavigatedFrom(Windows::UI::Xaml::Navigation::NavigationEventArgs const& e);
    };
}

namespace ChillBreak::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}