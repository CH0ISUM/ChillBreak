// filepath: c:\Users\deryd\Desktop\WORKSPACE\Personal Projects\ChillBreak\windows\ChillBreak\App.h

#pragma once

#include <winrt/Windows.ApplicationModel.Core.h>
#include <winrt/Windows.UI.Xaml.h>

namespace ChillBreak
{
    class App : public winrt::Windows::ApplicationModel::Core::IFrameworkViewSource
    {
    public:
        winrt::Windows::ApplicationModel::Core::IFrameworkView CreateView();
    };
}